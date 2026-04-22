export default function Map() {
  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.373740152382!2d37.04523914779679!3d54.516606526968026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4134c8b2b1e8e5b9%3A0x0!2zNTTCsDMwJzU5LjgiTiAzN8KwMDInNDMuMCJF!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта детского сада"
      />
    </div>
  );
}
