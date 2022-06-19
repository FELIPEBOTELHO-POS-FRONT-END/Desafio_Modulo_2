import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCandidates, getElectionsDetails } from "../services/apiService";
import CandidateCard from "./CandidateCard";

export default function DataCity({ city = null }) {
  const [electionsData, setElectionsData] = useState([]);

  useEffect(() => {
    async function getElectionsAndCandidatesData() {
      try {
        const candidates = await getCandidates();
        const dataElections = await getElectionsDetails(city.id);
        setElectionsData(
          dataElections
            .sort((a, b) => b.votes - a.votes)
            .map((x, index) => {
              return {
                ...x,
                candidate: candidates.find((y) => y.id === x.candidateId),
                percent:
                  ((x.votes / city.presence) * 100)
                    .toFixed(2)
                    .replace(".", ",") + "%",
                isWinner: index === 0 ? true : false,
              };
            })
        );
      } catch (e) {
        toast.error(e.message);
      }
    }
    getElectionsAndCandidatesData();
  }, [city]);

  return (
    <>
      <ToastContainer />
      <div className="justify-center p-3 text-lg flex flex-col items-center m-2">
        <div className="pb-3">
          <strong>Eleições em {city.name}</strong>
        </div>
        <div className="space-x-5">
          <span>
            <strong>Total de Eleitores: </strong>
            {city?.votingPopulation?.toLocaleString()}
          </span>
          <span>
            <strong>Comparecimento: </strong>
            {city?.absence?.toLocaleString()}
          </span>
          <span>
            <strong>Abstenção: </strong>
            {city?.presence?.toLocaleString()}
          </span>
        </div>
        <div className="font-semibold p-2">
          {electionsData.length} Candidatos
        </div>
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap p-2">
        {electionsData.map((data) => (
          <CandidateCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
