interface AvatarProps {
  image: string;
}
const Avatar = ({ image }: AvatarProps) => {
  return (
    <div>
      <img className="w-8 h-8 rounded-[50%]" src={image} alt="Image avatar" />
    </div>
  );
};

export default Avatar;
