import { ProductInterface } from "@/atoms";

interface CalculateHistoryProps {
  calculatedProducts: ProductInterface[];
  id: number;
  totalprice: number;
  packageEfficiency: number;
  date: string;
  title: string;
}

export function classNameHandler(...classnames: string[]) {
  return classnames.join(" ");
}

export function saveLocalStoage(data: any): void {
  const oldCalculatedHistory = getLocalStoage();

  if (oldCalculatedHistory) {
    oldCalculatedHistory.unshift(data);
    localStorage.setItem(
      "CalculatedHistory",
      JSON.stringify(oldCalculatedHistory)
    );
  } else {
    localStorage.setItem("CalculatedHistory", JSON.stringify([data]));
  }
}

export function getLocalStoage() {
  const json = localStorage.getItem("CalculatedHistory");
  if (!json) return;

  return JSON.parse(json);
}

export function removeLocalStoage(id: number) {
  const json = localStorage.getItem("CalculatedHistory");
  if (!json) return;

  const oldCalculatedHistory: CalculateHistoryProps[] = JSON.parse(json);

  const targetIndex = oldCalculatedHistory.findIndex((data) => data.id == id);

  localStorage.setItem(
    "CalculatedHistory",
    JSON.stringify([
      ...oldCalculatedHistory.slice(0, targetIndex),
      ...oldCalculatedHistory.slice(targetIndex + 1),
    ])
  );
}

export function changeLocalStorgeTitle(
  newtitle: string,
  targetData: CalculateHistoryProps
) {
  const json = localStorage.getItem("CalculatedHistory");
  if (!json) return;

  const oldCalculatedHistory: CalculateHistoryProps[] = JSON.parse(json);

  const targetIndex = oldCalculatedHistory.findIndex(
    (data) => data.id == targetData.id
  );

  localStorage.setItem(
    "CalculatedHistory",
    JSON.stringify([
      ...oldCalculatedHistory.slice(0, targetIndex),
      { ...targetData, title: newtitle },
      ...oldCalculatedHistory.slice(targetIndex + 1),
    ])
  );
}
