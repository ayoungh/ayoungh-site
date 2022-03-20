import Icons from './icons.js';

export function keyTo(key, { icon, mask, color }) {
    Icons[key] = { icon, mask, color };
}

export function iconFor(key) {
  return Icons[key] ? Icons[key].icon : null;
}

function getStyle({ fgColor }) {
  return {
    fill: fgColor || 'transparent',
  };
}

function Icon({ fgColor, networkKey, ...props }) {
  return (
    <svg className="social-svg" viewBox="0 0 64 64">
      <g {...props} className="social-svg-icon" style={getStyle({ fgColor })}>
        <path d={iconFor(networkKey)} />
      </g>
    </svg>
  );
}

export default Icon
