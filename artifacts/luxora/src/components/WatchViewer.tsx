import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface WatchConfig {
  dialColor: string;
  strapType: string;
  caseFinish: string;
}

interface WatchViewerProps {
  config: WatchConfig;
}

function CssWatch({ config }: WatchViewerProps) {
  const dialColors: Record<string, string> = {
    Champagne: '#e6c280',
    Slate: '#555f6e',
    Midnight: '#0a1128',
  };
  const caseColors: Record<string, string> = {
    Polished: 'linear-gradient(135deg, #e8e8e8 0%, #aaa 50%, #d0d0d0 100%)',
    Brushed: 'linear-gradient(135deg, #b0b0b0 0%, #888 50%, #b8b8b8 100%)',
    'PVD Gold': 'linear-gradient(135deg, #d4af37 0%, #a07820 50%, #d4af37 100%)',
  };
  const strapColors: Record<string, string> = {
    Leather: '#3d2b1f',
    Bracelet: 'linear-gradient(180deg,#888 0%,#ccc 50%,#888 100%)',
    Rubber: '#111',
  };

  const dial = dialColors[config.dialColor] || dialColors.Champagne;
  const caseStyle = caseColors[config.caseFinish] || caseColors.Polished;
  const strapStyle = strapColors[config.strapType] || strapColors.Leather;

  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDeg = (hours + minutes / 60) * 30;
  const minDeg = (minutes + seconds / 60) * 6;

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0D0D0D]">
      <div className="flex flex-col items-center select-none">
        <div className="relative" style={{ width: 240, height: 320 }}>
          {/* Top strap */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-t-sm"
            style={{
              width: 72,
              height: 110,
              top: 0,
              background: strapStyle,
              boxShadow: '0 -4px 12px rgba(0,0,0,0.5)',
            }}
          />
          {/* Watch case */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: 180,
              height: 180,
              top: 70,
              borderRadius: '50%',
              background: caseStyle,
              boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 2px 8px rgba(255,255,255,0.2)',
              zIndex: 2,
            }}
          >
            {/* Dial */}
            <div
              className="absolute"
              style={{
                width: 156,
                height: 156,
                top: 12,
                left: 12,
                borderRadius: '50%',
                backgroundColor: dial,
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
                overflow: 'hidden',
              }}
            >
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: i % 3 === 0 ? 3 : 1.5,
                    height: i % 3 === 0 ? 12 : 8,
                    background: '#B8860B',
                    left: '50%',
                    top: 6,
                    transformOrigin: `50% ${156 / 2 - 6}px`,
                    transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
              {/* Hour hand */}
              <div
                className="absolute"
                style={{
                  width: 4,
                  height: 50,
                  background: '#B8860B',
                  left: '50%',
                  bottom: '50%',
                  transformOrigin: 'bottom center',
                  transform: `translateX(-50%) rotate(${hourDeg}deg)`,
                  borderRadius: 2,
                }}
              />
              {/* Minute hand */}
              <div
                className="absolute"
                style={{
                  width: 2.5,
                  height: 68,
                  background: '#D4AF37',
                  left: '50%',
                  bottom: '50%',
                  transformOrigin: 'bottom center',
                  transform: `translateX(-50%) rotate(${minDeg}deg)`,
                  borderRadius: 2,
                }}
              />
              {/* Center dot */}
              <div
                className="absolute"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#B8860B',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {/* Brand text */}
              <div
                className="absolute font-serif text-[8px] tracking-widest uppercase text-center"
                style={{
                  color: '#B8860B',
                  bottom: '30%',
                  width: '100%',
                  opacity: 0.9,
                }}
              >
                LUXORA
              </div>
            </div>
          </div>
          {/* Crown */}
          <div
            className="absolute"
            style={{
              width: 10,
              height: 20,
              background: caseStyle,
              right: 28,
              top: '50%',
              marginTop: -10,
              borderRadius: 3,
              zIndex: 1,
            }}
          />
          {/* Bottom strap */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-b-sm"
            style={{
              width: 72,
              height: 110,
              bottom: 0,
              background: strapStyle,
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          />
        </div>
        <p className="mt-8 font-sans text-xs tracking-[0.3em] text-white/30 uppercase">
          CSS Preview &mdash; 3D available in browser
        </p>
      </div>
    </div>
  );
}

export const WatchViewer: React.FC<WatchViewerProps> = ({ config }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dialMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const caseMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const strapMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect WebGL support before creating renderer
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: testCanvas });
    } catch {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0D0D0D');

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0xffd700, 0.5);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    const caseGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 64);
    const caseMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.1 });
    caseMaterialRef.current = caseMat;
    const watchCase = new THREE.Mesh(caseGeo, caseMat);
    watchCase.rotation.x = Math.PI / 2;
    scene.add(watchCase);

    const dialGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.31, 64);
    const dialMat = new THREE.MeshStandardMaterial({ color: 0xe6c280, metalness: 0.2, roughness: 0.8 });
    dialMaterialRef.current = dialMat;
    const watchDial = new THREE.Mesh(dialGeo, dialMat);
    watchDial.rotation.x = Math.PI / 2;
    scene.add(watchDial);

    const handMat = new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.8, roughness: 0.2 });

    const hourHandGeo = new THREE.BoxGeometry(0.04, 0.6, 0.01);
    hourHandGeo.translate(0, 0.3, 0);
    const hourHand = new THREE.Mesh(hourHandGeo, handMat);
    hourHand.position.z = 0.16;

    const minHandGeo = new THREE.BoxGeometry(0.03, 0.9, 0.01);
    minHandGeo.translate(0, 0.45, 0);
    const minHand = new THREE.Mesh(minHandGeo, handMat);
    minHand.position.z = 0.17;

    scene.add(hourHand);
    scene.add(minHand);

    const pivotGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 32);
    const pivot = new THREE.Mesh(pivotGeo, handMat);
    pivot.rotation.x = Math.PI / 2;
    pivot.position.z = 0.17;
    scene.add(pivot);

    const strapGeo = new THREE.BoxGeometry(1.4, 3, 0.1);
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1f, roughness: 0.9 });
    strapMaterialRef.current = strapMat;
    const strapTop = new THREE.Mesh(strapGeo, strapMat);
    strapTop.position.y = 2;
    strapTop.position.z = -0.1;
    scene.add(strapTop);
    const strapBottom = new THREE.Mesh(strapGeo.clone(), strapMat);
    strapBottom.position.y = -2;
    strapBottom.position.z = -0.1;
    scene.add(strapBottom);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 3;
    controls.maxDistance = 8;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();

      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      hourHand.rotation.z = -((h % 12 + m / 60) * (Math.PI * 2)) / 12;
      minHand.rotation.z = -((m + s / 60) * (Math.PI * 2)) / 60;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      if (rendererRef.current && containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (!webglSupported) return;
    if (dialMaterialRef.current) {
      switch (config.dialColor) {
        case 'Slate': dialMaterialRef.current.color.setHex(0x555f6e); break;
        case 'Midnight': dialMaterialRef.current.color.setHex(0x0a1128); break;
        default: dialMaterialRef.current.color.setHex(0xe6c280);
      }
    }
    if (caseMaterialRef.current) {
      switch (config.caseFinish) {
        case 'Brushed': caseMaterialRef.current.color.setHex(0xaaaaaa); caseMaterialRef.current.roughness = 0.5; break;
        case 'PVD Gold': caseMaterialRef.current.color.setHex(0xd4af37); caseMaterialRef.current.roughness = 0.2; break;
        default: caseMaterialRef.current.color.setHex(0xcccccc); caseMaterialRef.current.roughness = 0.1;
      }
    }
    if (strapMaterialRef.current) {
      switch (config.strapType) {
        case 'Bracelet': strapMaterialRef.current.color.setHex(0x999999); strapMaterialRef.current.roughness = 0.2; (strapMaterialRef.current as THREE.MeshStandardMaterial).metalness = 0.8; break;
        case 'Rubber': strapMaterialRef.current.color.setHex(0x111111); strapMaterialRef.current.roughness = 0.8; (strapMaterialRef.current as THREE.MeshStandardMaterial).metalness = 0.1; break;
        default: strapMaterialRef.current.color.setHex(0x3d2b1f); strapMaterialRef.current.roughness = 0.9; (strapMaterialRef.current as THREE.MeshStandardMaterial).metalness = 0;
      }
    }
  }, [config, webglSupported]);

  if (!webglSupported) {
    return <CssWatch config={config} />;
  }

  return <div ref={containerRef} className="w-full h-full cursor-move" />;
};
