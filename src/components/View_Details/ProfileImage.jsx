import React, { useMemo } from "react";

const ProfileImage = ({ src }) => {
  const profileImage = useMemo(() => {
    if (src && typeof src === "string") {
      return (
        <img
          src={src}
          alt="Profile"
          className="rounded-circle shadow-sm border border-primary"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
      );
    }
    return null;
  }, [src]);

  return <div className="mb-3">{profileImage}</div>;
};

export default ProfileImage;
