import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ 
  modelType = 'laptop', 
  interactive = true, 
  rotateSpeed = 1.0,
  showPedestal = true,
  height = '420px',
  accentColor = 0x2b693a
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const heightPx = container.clientHeight || 420;

    // 1. Scene setup
    const scene = new THREE.Scene();
    
    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / heightPx, 0.1, 1000);
    camera.position.set(0, 1.8, 5.2);
    camera.lookAt(0, 0.2, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xedf2f7, 1.0);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    // 5. Specimen Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Pedestal
    if (showPedestal) {
      const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.35, 48);
      const pedestalMat = new THREE.MeshStandardMaterial({
        color: 0xded8cc,
        roughness: 0.85,
        metalness: 0.05
      });
      const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestal.position.y = -0.7;
      pedestal.receiveShadow = true;
      scene.add(pedestal);

      // Radar Ring around pedestal
      const ringGeo = new THREE.RingGeometry(1.85, 1.88, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xb5ad9e,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.68;
      scene.add(ring);

      // Outer dashed coordinates ring
      const outerRingGeo = new THREE.RingGeometry(2.15, 2.17, 64);
      const outerRingMat = new THREE.MeshBasicMaterial({
        color: 0x9e9584,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35
      });
      const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
      outerRing.rotation.x = Math.PI / 2;
      outerRing.position.y = -0.68;
      scene.add(outerRing);
    }

    // Specimen Geometry Construction
    const objectGroup = new THREE.Group();
    masterGroup.add(objectGroup);

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a4742,
      roughness: 0.35,
      metalness: 0.85
    });

    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xe8e4dc,
      roughness: 0.4,
      metalness: 0.2
    });

    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1918,
      roughness: 0.2,
      metalness: 0.8
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: accentColor,
      roughness: 0.3,
      metalness: 0.4
    });

    if (modelType === 'laptop') {
      // Laptop Base
      const baseGeo = new THREE.BoxGeometry(1.8, 0.06, 1.25);
      const base = new THREE.Mesh(baseGeo, bodyMaterial);
      base.castShadow = true;
      base.receiveShadow = true;
      objectGroup.add(base);

      // Trackpad
      const padGeo = new THREE.BoxGeometry(0.55, 0.01, 0.38);
      const pad = new THREE.Mesh(padGeo, metalMaterial);
      pad.position.set(0, 0.035, 0.35);
      objectGroup.add(pad);

      // Keyboard plate
      const kbGeo = new THREE.BoxGeometry(1.6, 0.01, 0.55);
      const kb = new THREE.Mesh(kbGeo, metalMaterial);
      kb.position.set(0, 0.035, -0.15);
      objectGroup.add(kb);

      // Laptop Screen / Lid
      const lidGroup = new THREE.Group();
      lidGroup.position.set(0, 0.03, -0.6);
      lidGroup.rotation.x = -Math.PI / 3.2; // ~110 degree open

      const lidGeo = new THREE.BoxGeometry(1.8, 1.25, 0.04);
      const lid = new THREE.Mesh(lidGeo, bodyMaterial);
      lid.position.set(0, 0.62, 0);
      lid.castShadow = true;
      lidGroup.add(lid);

      const displayGeo = new THREE.BoxGeometry(1.7, 1.15, 0.01);
      const display = new THREE.Mesh(displayGeo, screenMaterial);
      display.position.set(0, 0.62, 0.02);
      lidGroup.add(display);

      objectGroup.add(lidGroup);

    } else if (modelType === 'audio') {
      // Headphones structure
      const bandCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-1.0, -0.2, 0),
        new THREE.Vector3(0, 1.4, 0),
        new THREE.Vector3(1.0, -0.2, 0)
      );
      const tubeGeo = new THREE.TubeGeometry(bandCurve, 32, 0.06, 12, false);
      const band = new THREE.Mesh(tubeGeo, metalMaterial);
      objectGroup.add(band);

      // Left ear cup
      const cupGeo = new THREE.CylinderGeometry(0.42, 0.45, 0.32, 32);
      const cupL = new THREE.Mesh(cupGeo, bodyMaterial);
      cupL.rotation.z = Math.PI / 2;
      cupL.position.set(-1.0, -0.2, 0);
      objectGroup.add(cupL);

      // Right ear cup
      const cupR = new THREE.Mesh(cupGeo, bodyMaterial);
      cupR.rotation.z = Math.PI / 2;
      cupR.position.set(1.0, -0.2, 0);
      objectGroup.add(cupR);

    } else {
      // Appliance / Motorized turbine or universal tech assembly
      const cylinderGeo = new THREE.CylinderGeometry(0.65, 0.75, 1.4, 32);
      const cylinder = new THREE.Mesh(cylinderGeo, bodyMaterial);
      cylinder.castShadow = true;
      objectGroup.add(cylinder);

      // Top accent filter cone
      const coneGeo = new THREE.ConeGeometry(0.55, 0.6, 32);
      const cone = new THREE.Mesh(coneGeo, accentMaterial);
      cone.position.set(0, 0.9, 0);
      objectGroup.add(cone);

      // Mechanical ribs
      for (let i = 0; i < 4; i++) {
        const ring = new THREE.RingGeometry(0.76, 0.8, 32);
        const ringM = new THREE.Mesh(ring, metalMaterial);
        ringM.rotation.x = Math.PI / 2;
        ringM.position.y = -0.4 + i * 0.25;
        objectGroup.add(ringM);
      }
    }

    // Set initial position
    objectGroup.position.y = 0.05;

    // 6. Interactive Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e) => {
      if (!interactive) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging || !interactive) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      masterGroup.rotation.y += deltaX * 0.01 * rotateSpeed;
      masterGroup.rotation.x = Math.max(-0.4, Math.min(0.4, masterGroup.rotation.x + deltaY * 0.005));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 7. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle autonomous rotation when not dragging
      if (!isDragging) {
        masterGroup.rotation.y += 0.004 * rotateSpeed;
        objectGroup.position.y = 0.05 + Math.sin(elapsedTime * 1.5) * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelType, interactive, rotateSpeed, showPedestal, accentColor]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: height, 
        position: 'relative', 
        cursor: interactive ? 'grab' : 'default',
        overflow: 'hidden'
      }} 
    />
  );
}
