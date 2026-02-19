import Modal from "../Modal/Modal";
import ButtonText from "../parts/ButtonText/ButtonText";

interface ConfirmWindowProps {
  question: string;
  yes: string;
  no: string;
  warning?: string;
  handleYes: () => void;
  handleNo: () => void;
}

export default function ConfirmWindow({
  question,
  yes,
  no,
  handleYes,
  handleNo,
  warning = "This can't be undone",
}: ConfirmWindowProps) {
  return (
    <Modal onClose={handleNo}>
      <div className="flex flex-col w-full max-w-111">
        <h2 className="mobile:text-s32 text-black-900 bg-pink-400 p-4 selection:text-purple-800 selection:bg-white-950">
          {question}
        </h2>
        <div className="bg-black-900 flex flex-col gap-4 p-4 mobile:text-s20 selection:text-purple-800 selection:bg-pink-400">
          <p className="text-white-400">{warning}</p>
          <div className="flex flex-wrap justify-between gap-2">
            <ButtonText
              text={no}
              handler={handleNo}
              twStyles="px-5 text-white-400 font-normal border"
              textColorHover="var(--color-white-950)"
              bgColorHover="var(--color-black-900)"
              borderColorHover="var(--color-white-950)"
            />
            <ButtonText
              text={yes}
              handler={handleYes}
              twStyles="px-5 text-pink-400 font-normal border selection:text-purple-800 selection:bg-white-950"
              textColorHover="var(--color-black-900)"
              bgColorHover="var(--color-pink-400)"
              borderColorHover="var(--color-pink-400)"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
