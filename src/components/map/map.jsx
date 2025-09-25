export default function Map() {
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "75%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373740152382!2d37.04523914779679!3d54.516606526968026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMxJzAwLjkiTiAzN8KwMDInMzIuOSJF!5e0!3m2!1sen!2sru!4v1620000000000!5m2!1sen!2sru&markers=color:red%7C54.516606526968026,37.04523914779679"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          border: 0,
          borderRadius: "8px",
        }}
        allowFullScreen
        loading="lazy"
        title="Карта местоположения"
      />
    </div>
  );
}
