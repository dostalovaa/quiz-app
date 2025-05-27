import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type TimeLinerProps = {
  currentIndex: number;
  length: number;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  borderRadius: 8,
  margin: 5,
  border: "5px solid #3C087B",
  backgroundColor: "#3C087B",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#3C087B",
    ...theme.applyStyles?.("dark", {
      backgroundColor: "#3C087B",
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundColor: "#fff",
    ...theme.applyStyles?.("dark", {
      backgroundColor: "#fff",
    }),
  },
}));

export default function TimeLiner({ currentIndex, length }: TimeLinerProps) {
  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={((currentIndex + 1) / length) * 100}
        />
      </Stack>
      <p className="text-center text-sm text-gray-500 mt-2">
        {currentIndex + 1} / {length}
      </p>
    </>
  );
}
