export type WallMaterialType = 'plain' | 'marble' | 'block' | 'stone';
export type WindowStyleType = 'rect' | 'arch';

export interface View3DSettings {
  floorHeight: number;
    sectionHeight: number;
      showGrid: boolean;
        showFloor: boolean;
          wallColor: string;
            wallMaterial: WallMaterialType;
              doorColor: string;
                doorOpenAngle: number;
                  windowFrameColor: string;
                    windowGlassColor: string;
                      windowGlassOpacity: number;
                        windowStyle: WindowStyleType;
                          windowSashCols: number;
                            windowSashRows: number;
                              showCornice: boolean;
                                corniceColor: string;
                                // ✅ إعدادات سور محيط الأرض
                                  showFence: boolean;
                                    fenceHeight: number;
                                      fenceMaterial: WallMaterialType;
                                        fenceColor: string;
                                }

                                export const DEFAULT_VIEW3D_SETTINGS: View3DSettings = {
                                  floorHeight: 3,
                                    sectionHeight: 0,
                                      showGrid: true,
                                        showFloor: true,
                                          wallColor: '#FFFFFF',
                                            wallMaterial: 'plain',
                                              doorColor: '#8B5A2B',
                                                doorOpenAngle: 80,
                                                  windowFrameColor: '#000000',
                                                    windowGlassColor: '#87CEEB',
                                                      windowGlassOpacity: 0.90,
                                                        windowStyle: 'rect',
                                                          windowSashCols: 2,
                                                            windowSashRows: 2,
                                                              showCornice: true,
                                                                corniceColor: '#F5F0E8',
                                                                  // ✅ افتراضيات السور
                                                                    showFence: true,
                                                                      fenceHeight: 2.5,
                                                                        fenceMaterial: 'plain',
                                                                          fenceColor: '#E8E4DC',
                                                                };

                                                                // ✅ ألوان جاهزة للاختيار السريع
                                                                export const COLOR_PALETTE = [
                                                                  '#FFFFFF', '#F5F0E8', '#FFF8DC', '#EDE9E0',
                                                                    '#F0F0F0', '#D9D9D9', '#B0B0B0', '#808080',
                                                                      '#4A4A4A', '#1A1A1A', '#000000', '#1A2A4A',
                                                                        '#8B5A2B', '#A0522D', '#D2B48C', '#F5DEB3',
                                                                          '#87CEEB', '#A0C8E0', '#B0D4E8', '#E8F0F5',
                                                                            '#F5E6D3', '#E8E0D0', '#D4C5B0', '#C4A57B',
                                                                            ];