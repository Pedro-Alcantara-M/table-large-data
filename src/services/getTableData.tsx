import axios from "axios";
import { useEffect, useState } from "react";
import { IFMSCA, ITableHeader } from "../type/fmsca.interface";

export const useGetTableData = () => {
  const [data, setData] = useState<{ data: IFMSCA[]; status?: number }>({
    data: [],
    status: undefined,
  });
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const sheetId = "1hB_LjBT9ezZigXnC-MblT2PXZledkZqBnvV23ssfSuE";
    const sheetGid = "1874221723";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=${sheetGid}`;

    setLoading(true);
    const resp: any = {
      data: null,
      status: null,
    };
    await axios
      .get(url)
      .then((response) => {
        const json = JSON.parse(
          response.data.substring(47, response.data.length - 2)
        );
        const headers = json.table.cols.map((header: ITableHeader) => header.label);
        const row = json.table.rows.map((row: any) => row.c);

        const formattedArray = row.map((entry: any) => {
          const result: { [key: string]: any } = {};
          for (let i = 0; i < headers.length; i++) {
            result[headers[i]] = entry[i] ? entry[i].v : null;
          }
          return result;
        });
        resp.data = formattedArray;
      })
      .catch((error) => {
        if (error.response) {
          resp.data = error.response.data;
          resp.status = error.response.status;
        }
      })
      .finally(() => {
        setLoading(false);
        return setData(resp);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { getData, setData, data, loading };
};
