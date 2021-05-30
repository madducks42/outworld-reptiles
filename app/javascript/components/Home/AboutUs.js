import React from "react";

const AboutUs = () => {
  return (
    <div className="column is-two-thirds">
      <h3 className="is-size-3">About Us</h3>
      <p className="is-size-7">
        Outworld Reptiles is owned by Maddox Grey, a long time reptile
        enthusiast. Our current projects are based around Boa Constrictors;
        including several different BCI morphs, Blood Boas, and a small BCO
        project revolving around a high pink line of Argentine Boas, please
        refer to the Collections page for more information.
      </p>
      <p className="is-size-7">
        We typically only have a couple litters a year, once the babies are
        established they will be posted on <a href="https://www.morphmarket.com/stores/outworldreptiles/" target="_blank" rel="noreferrer">Morph Market</a>. If you have any
        questions please contact us at outworldreptiles@gmail.com.
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
