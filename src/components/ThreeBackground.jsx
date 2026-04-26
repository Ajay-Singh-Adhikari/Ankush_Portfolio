import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Plexus Configuration
    const group = new THREE.Group();
    scene.add(group);

    const particlesCount = 80; // Slightly fewer for a cleaner look
    const maxDistance = 4;
    
    const positions = new Float32Array(particlesCount * 3);
    const particlesData = [];

    const r = 12; // Range of distribution

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * r * 2;
      const y = (Math.random() - 0.5) * r * 2;
      const z = (Math.random() - 0.5) * r * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (-1 + Math.random() * 2) * 0.008,
          (-1 + Math.random() * 2) * 0.008,
          (-1 + Math.random() * 2) * 0.008
        ),
        numConnections: 0,
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));

    // Particle Material (Clean White Nodes)
    const pMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.15,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const pointCloud = new THREE.Points(particlesGeometry, pMaterial);
    group.add(pointCloud);

    // Line Geometry for the Network
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particlesCount * particlesCount * 3);
    const lineColors = new Float32Array(particlesCount * particlesCount * 3);

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.3
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lMaterial);
    group.add(lineMesh);

    camera.position.z = 15;

    // Mouse tracking for Parallax
    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;

      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particlesCount; i++) {
        // Move particles
        const particleData = particlesData[i];
        positions[i * 3] += particleData.velocity.x;
        positions[i * 3 + 1] += particleData.velocity.y;
        positions[i * 3 + 2] += particleData.velocity.z;

        // Bounce back
        if (Math.abs(positions[i * 3 + 1]) > r) particleData.velocity.y *= -1;
        if (Math.abs(positions[i * 3]) > r) particleData.velocity.x *= -1;
        if (Math.abs(positions[i * 3 + 2]) > r) particleData.velocity.z *= -1;

        // Check connections
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[vertexpos++] = positions[i * 3];
            linePositions[vertexpos++] = positions[i * 3 + 1];
            linePositions[vertexpos++] = positions[i * 3 + 2];

            linePositions[vertexpos++] = positions[j * 3];
            linePositions[vertexpos++] = positions[j * 3 + 1];
            linePositions[vertexpos++] = positions[j * 3 + 2];

            // Clean Silver to Sapphire gradient
            lineColors[colorpos++] = 0.5 + alpha * 0.5; // R
            lineColors[colorpos++] = 0.7 + alpha * 0.3; // G
            lineColors[colorpos++] = 1.0; // B

            lineColors[colorpos++] = 0.5 + alpha * 0.5;
            lineColors[colorpos++] = 0.7 + alpha * 0.3;
            lineColors[colorpos++] = 1.0;

            numConnected++;
          }
        }
      }

      lineMesh.geometry.setDrawRange(0, numConnected * 2);
      lineMesh.geometry.attributes.position.needsUpdate = true;
      lineMesh.geometry.attributes.color.needsUpdate = true;
      pointCloud.geometry.attributes.position.needsUpdate = true;

      // Dynamic Rotation + Mouse Parallax
      group.rotation.y += 0.0005 + target.x * 0.02;
      group.rotation.x += 0.0002 - target.y * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      pMaterial.dispose();
      lineGeometry.dispose();
      lMaterial.dispose();
    };
  }, []);


  return (
    <>
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none bg-[#020205]"
      />
      {/* Separation Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(2, 2, 5, 0.1) 0%, rgba(2, 2, 5, 0.4) 100%)",
        }}
      />
    </>
  );
};

export default ThreeBackground;
