import React from "react";
import TiltedCard from './TiltedCard';

const Footer: React.FC = () => (
  <footer className="py-16 bg-black border-t border-gray-900">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
      <div className="flex justify-center mb-8">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Debjit Debnath"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">
              Debjit Debnath
            </p>
          }
        />
      </div>
      <div className="text-gray-600 text-sm">
        Ornithopter © 2025. Redefining the boundaries of flight.
      </div>
    </div>
  </footer>
);

export default Footer;