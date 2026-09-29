import React from 'react';
import type { Wall, Door } from '../../core/types';

interface Props {
  wall: Wall;
    door: Door;
      color?: string;
        openAngleDeg?: number;
        }

        export const Door3D: React.FC<Props> = ({
          wall,
            door,
              color = '#8B5A2B',
                openAngleDeg = 90,
                }) => {
                  const dx = wall.end.x - wall.start.x;
                    const dy = wall.end.y - wall.start.y;
                      const len = Math.hypot(dx, dy) || 1;

                        // ✅ مركز الباب = محور الجدار (نفس 2D)
                          const centerX = door.center?.x ?? (wall.start.x + ((door.position + door.width / 2) / len) * dx);
                            const centerY = door.center?.y ?? (wall.start.y + ((door.position + door.width / 2) / len) * dy);

                              // ✅ زاوية الباب = door.rotation المخزّن (نفس 2D تماماً)
                                const rotation = door.rotation ?? Math.atan2(dy, dx);
                                  const cosR = Math.cos(rotation);
                                    const sinR = Math.sin(rotation);

                                      // موضع المفصل
                                        const hingeLocalX = door.hinge === 'start' ? -door.width / 2 : door.width / 2;
                                          const hingeWorldX = centerX + hingeLocalX * cosR;
                                            const hingeWorldY = centerY + hingeLocalX * sinR;

                                              // ✅ اتجاه الفتح (مطابق 2D لجميع الحالات)
                                                const closedSign = door.hinge === 'start' ? 1 : -1;
                                                  const swingSign = door.swing || 1;
                                                    const theta = (openAngleDeg * Math.PI) / 180;
                                                      const thetaSigned = theta * closedSign * swingSign;
                                                        const openDirLocalX = closedSign * Math.cos(thetaSigned);
                                                          const openDirLocalY = closedSign * Math.sin(thetaSigned);

                                                            const doorDirX = openDirLocalX * cosR - openDirLocalY * sinR;
                                                              const doorDirY = openDirLocalX * sinR + openDirLocalY * cosR;

                                                                const leafCenterX = hingeWorldX + doorDirX * (door.width / 2);
                                                                  const leafCenterY = hingeWorldY + doorDirY * (door.width / 2);
                                                                    const rotationY = Math.atan2(-doorDirY, doorDirX);

                                                                      const doorThickness = 0.05;

                                                                        return (
                                                                            <group>
                                                                                  <mesh
                                                                                          position={[leafCenterX, door.height / 2, leafCenterY]}
                                                                                                  rotation={[0, rotationY, 0]}
                                                                                                        >
                                                                                                                <boxGeometry args={[door.width, door.height, doorThickness]} />
                                                                                                                        <meshStandardMaterial color={color} roughness={0.7} />
                                                                                                                              </mesh>

                                                                                                                                    <mesh
                                                                                                                                            position={[
                                                                                                                                                      hingeWorldX + doorDirX * door.width * 0.88,
                                                                                                                                                                door.height * 0.5,
                                                                                                                                                                          hingeWorldY + doorDirY * door.width * 0.88,
                                                                                                                                                                                  ]}
                                                                                                                                                                                        >
                                                                                                                                                                                                <sphereGeometry args={[0.04, 12, 12]} />
                                                                                                                                                                                                        <meshStandardMaterial color="#FFD700" metalness={0.85} roughness={0.15} />
                                                                                                                                                                                                              </mesh>
                                                                                                                                                                                                                  </group>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    };