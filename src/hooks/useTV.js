import { useEffect, useState } from "react";
import {getTvDetails} from '../api/tmdb-api'

const useTv = id => {
  const [tv, setTv] = useState(null);
  useEffect(() => {
    getTvDetails(id).then(tv => {
      setTv(tv);
    });
  }, [id]);
  return [tv, setTv];
};

export default useTv