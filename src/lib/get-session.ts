import { createHash } from "crypto";
import { headers } from "next/headers";

export const getSession = async () => {
  const headersList = headers();
  const ipAddress = headersList.get("x-forwarded-for") || "0.0.0.0";

  const id = createHash("md5")
    .update(ipAddress + (process.env.IP_ADDRESS_SALT || ""), "utf8")
    .digest("hex");

  return id;
};
