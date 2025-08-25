"use client";
import ShowData, { type ApiResponse } from "../ShowData";

type Props = {
  fallbackData?: ApiResponse;
};

export default function ClientShowDataWrapper({ fallbackData }: Props) {
  return <ShowData fallbackData={fallbackData} />;
}
