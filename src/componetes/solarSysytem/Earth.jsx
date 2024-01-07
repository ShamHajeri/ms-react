import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    earthRef.current.appendChild(renderer.domElement);

    // Create Earth with texture
    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthTexture = new THREE.TextureLoader().load('../../assert/eat.jpeg');
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Set up camera position
    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Earth
      if (earth) {
        earth.rotation.y += 0.01;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      earthRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={earthRef} />;
};

export default Earth;
