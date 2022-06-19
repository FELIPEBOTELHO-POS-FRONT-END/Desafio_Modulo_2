export default function CandidateCard({ data }) {
  const isWinnerColorClass = data?.isWinner
    ? "text-green-600"
    : "text-orange-500";

  return (
    <div className="shadow-lg p-4 m-2 w-[20rem] h-[16rem]">
      <div className="flex flex-row justify-between h-20 m-2 w-full">
        <img
          className="w-20 h-20 rounded-full"
          src={`img/${data?.candidate?.username}.png`}
          alt="Imagem do candidato"
        />
        <div className="flex flex-col justify-center items-end">
          <span className={`${isWinnerColorClass} text-lg font-semibold`}>
            {data?.percent}
          </span>
          <span className="text-sm">{data?.votes?.toLocaleString()} votos</span>
        </div>
      </div>
      <div className="text-2xl font-semibold text-center pt-5">
        {data?.candidate?.name}
      </div>
      <div
        className={`${isWinnerColorClass} font-semibold text-lg text-center pt-6 `}
      >
        {data?.isWinner ? "Eleito" : "Não Eleito"}
      </div>
    </div>
  );
}
