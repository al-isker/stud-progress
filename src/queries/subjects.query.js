import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {API} from "../config/API.js";

class subjectQuery {
  useGetAll = () => useQuery({
    queryKey: ['subjects'],
    queryFn: async () => axios.get(`${API}/subjects`),
    select: ({data}) => data
  });

  useGetById = (subjectId) => useQuery({
    queryKey: ['subjects', subjectId],
    queryFn: async () => axios.get(`${API}/subjects/${subjectId}`),
    select: ({data}) => data,
    enabled: Boolean(subjectId)
  });
}

export default new subjectQuery;