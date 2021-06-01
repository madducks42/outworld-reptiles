import React from "react";

const AboutUs = () => {
  return (
    <div className="column is-two-thirds">
      <h3 className="is-size-3">About Us</h3>
      <p className="is-size-7">
        Outworld Reptiles is owned by Maddox Grey, a long time reptile
        enthusiast. Our goal is to breed quality healthy boas. Current projects include a variety of borphs, a project focused on the Central American blood morph, finally a small Maxx Pink Line Argentine Boa project. Please check out our <a href="/collection">Collections</a> page for more info!
      </p>
      <br />
      <p className="is-size-7">
        We typically only have a couple litters a year, once the babies are
        established they will be posted on <a href="https://www.morphmarket.com/stores/outworldreptiles/" target="_blank" rel="noreferrer">Morph Market</a>. If you have any
        questions please contact us at <a href="mailto:outworldreptiles@gmail.com">outworldreptiles@gmail.com</a>.
      </p>
      <br />
      <h5 className="is-size-5 has-text-centered">Follow us on Instagram or Facebook!</h5>
      <div className="flex-row">
        <a href="https://www.instagram.com/outworldreptiles" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="Instagram"/></a>
        <a href="https://www.facebook.com/outworldreptiles/" target="_blank" rel="noreferrer"><img src="/images/facebook.png" alt="Facebook"/></a>
      </div>
    </div>
  );
};

export default AboutUs;
