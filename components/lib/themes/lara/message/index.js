export default {
    root: {
        margin: '1.125rem 0',
        borderRadius: '{content.border.radius}'
    },
    content: {
        padding: '0.75rem 1rem',
        gap: '0.5rem'
    },
    text: {
        fontSize: '1rem',
        fontWeight: '500'
    },
    icon: {
        size: '1.25rem'
    },
    closeButton: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            offset: '{focus.ring.offset}'
        }
    },
    closeIcon: {
        size: '1rem'
    },
    colorScheme: {
        light: {
            info: {
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: '{blue.200}',
                color: '{blue.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{blue.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {blue.200}'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: '{green.200}',
                color: '{green.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{green.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {green.200}'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: '{yellow.200}',
                color: '{yellow.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{yellow.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {yellow.200}'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: '{red.200}',
                color: '{red.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{red.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {red.200}'
                    }
                }
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.200}',
                color: '{surface.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.200}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {surface.200}'
                    }
                }
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.950}',
                color: '{surface.50}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.800}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {surface.400}'
                    }
                }
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                color: '{blue.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                color: '{green.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                color: '{yellow.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                color: '{red.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)'
                    }
                }
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.700}',
                color: '{surface.300}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.700}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)'
                    }
                }
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.100}',
                color: '{surface.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)'
                    }
                }
            }
        }
    }
};
