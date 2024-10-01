import React, { useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  useEffect(() => {
    const canvas = document.querySelector('canvas.webgl')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.zIndex = -1; // Ensure it's behind other elements
    document.body.appendChild(renderer.domElement);

    // Add your objects (e.g., a cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    material.metalness = 0.7;
    material.roughness = 0.2;
    material.color = new THREE.Color(0xff00ff);
    
    camera.position.z = 5;
    camera.position.y = 0;

    const pointLight = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.x = 2;

    pointLight.position.y = 3;

    pointLight.position.z = 4;

    pointLight.intensity = 2;

    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x000ff0, 3);

    pointLight2.position.x = 4;

    pointLight2.position.y = 3;

    pointLight2.position.z = 2;

    scene.add(pointLight2);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Clean up on component unmount
      window.removeEventListener('resize', () => {});
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}