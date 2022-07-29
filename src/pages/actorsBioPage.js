import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import TemplateActorBioPage from "../components/templateActorBio";
import { getActorBio } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const ActorBiographyPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorBio
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <TemplateActorBioPage actor={actor}>
            <ActorDetails actor={actor} />
          </TemplateActorBioPage>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorBiographyPage;