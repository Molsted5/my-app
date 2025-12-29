export function Profile({ size = 100 }) {
    const avatar = "https://i.imgur.com/MK3eW3As.jpg";
  return ( 
    <img 
      className="avatar"
      src={avatar}
      alt="Katherine Johnson"
      width={size}
      height={size}
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h2>Amazing scientists</h2>
      <Profile size={80} />
      <Profile size={120} />
      <Profile size={150} />
    </section>
  );
}