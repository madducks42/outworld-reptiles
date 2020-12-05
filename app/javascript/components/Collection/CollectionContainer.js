import React, { useState, useEffect } from "react";
import CollectionTile from "./CollectionTile";

const CollectionContainer = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("/collections")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setCollection(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let collectionBCITiles = collection.map((snake) => {
    if (snake.category === "bci") {
      return (
        <CollectionTile
          key={snake.id}
          id={snake.id}
          name={snake.name}
          image={snake.image}
          title={snake.title}
          description={snake.description}
          sex={snake.sex}
        />
      );
    }
  });

  let collectionCATiles = collection.map((snake) => {
    if (snake.category === "blood") {
      return (
        <CollectionTile
          key={snake.id}
          id={snake.id}
          name={snake.name}
          image={snake.image}
          title={snake.title}
          description={snake.description}
          sex={snake.sex}
        />
      );
    }
  });

  let collectionBCOTiles = collection.map((snake) => {
    if (snake.category === "bco") {
      return (
        <CollectionTile
          key={snake.id}
          id={snake.id}
          name={snake.name}
          image={snake.image}
          title={snake.title}
          description={snake.description}
          sex={snake.sex}
        />
      );
    }
  });

  let collectionMiscTiles = collection.map((snake) => {
    if (snake.category === "misc") {
      return (
        <CollectionTile
          key={snake.id}
          id={snake.id}
          name={snake.name}
          image={snake.image}
          title={snake.title}
          description={snake.description}
          sex={snake.sex}
        />
      );
    }
  });

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="is-size-2">
              Boa Constrictor Imperator (BCI) Collection
            </h1>
            <p className="is-size-7">
              If you&apos;re new to the world of boa constrictors you may not be
              aware that there are lots of different types of &quot;boa
              constrictors&quot;. Typically what you see in a pet store or on
              television is referred to as a &quot;boa&quot;, &quot;boa
              constrictor&quot;, or &quot;red-tailed boa&quot;. Chances are
              pretty good that in all cases the boa in question is a Boa
              Constrictor Imperator, commonly shortened to BCI in the reptile
              world. Without getting into too much detail, this species of boa
              constrictor is found throughout Central and South America and is
              the most common type of boa in the pet trade. There are a lot of
              other sub-species and locales of boas! True &quot;red-tail
              boas&quot; belong to the sub-species Boa Constrictor Constrictor
              (BCC) and generally have brick red-tails and get larger than
              BCI&apos;s. There is a fairly good breakdown of the boa species
              and sub-species here -{" "}
              <a
                href="https://www.reptifiles.com/red-tailed-boa-care/boa-species-subspecies/"
                target="_blank"
                rel="noreferrer"
              >
                Reptifiles
              </a>{" "}
              - if you&apos;re interested in learning more.
            </p>
            <div className="columns is-multiline section">
              {collectionBCITiles}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="is-size-2">Central American Boa Collection</h1>
            <p className="is-size-7">
              Several years ago I saw my first blood boa morph and instantly
              fell in love. It look me a while but I eventually cultivated a
              very nice collection of Central American BCI&apos;s centered
              around the blood morph. Central American Boas are still Boa
              Constrictor Imperators, so they&apos;re they&apos;re technically
              the same species as the boas above. However, boas in Central
              America evolved different and are considered a &quot;locale&quot;
              type of boa. They&apos;re much smaller in size than BCI&apos;s
              from South America and they often have very different patterns.
              Examples of Central American Boas are Hogg Island Boas, El
              Salvador Boas (where the &quot;blood morph originated&quot;), and
              Costa Rica. There are others and each is considered to be
              it&apos;s own &quot;locale&quot;, there are many breeders who
              specialize in breeding pure locale boas from each of these
              regions. My two Blood Boas are pure Central American Boas, the
              others in my collection have small amounts of South American BCI
              blood.
            </p>
            <div className="columns is-multiline section">
              {collectionCATiles}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="is-size-2">Argentine Boa Collection</h1>
            <p className="is-size-7">
              If I had more space I would absolutey have more sub-species of
              boas. Like I&apos;d probably have all of them and all the locales.
              But space is limited and taking care of 20+ boas is already a lot
              of work for one person so I have to maintain some semblance of
              self control. Currently the only sub-species I own is a pair of
              Argentine Boas which are Boa Constrictor Occidentalis. Both of
              them were purchased from Ancient Reproductions who are super nice
              and wonderful breeders of Argentine Boas.
            </p>
            <div className="columns is-multiline section">
              {collectionBCOTiles}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="is-size-2">Miscellaneous Collection</h1>
            <p className="is-size-7">
              In addition to a variety of boa constrictors I also own quite a
              few other snakes that I don&apos;t breed but I like the species
              enough to have them in my collection.
            </p>
            <div className="columns is-multiline section">
              {collectionMiscTiles}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;
