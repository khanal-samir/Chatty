import jwt from "jsonwebtoken";

const generateTokenAndsetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // miliseconds
    httpOnly: true, // prevent XSS attack
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development", // if in developnent
  });
};
export default generateTokenAndsetCookie;
