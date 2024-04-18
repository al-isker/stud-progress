import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";

import {API} from "../config/API.js";

class useQuerySubject {
  getAll = () => useQuery({
    queryKey: ['subjects'],
    queryFn: async () => axios.get(`${API}/subjects`),
    select: ({data}) => data
  });

  getById = (subjectId) => useQuery({
    queryKey: ['subjects', subjectId],
    queryFn: async () => axios.get(`${API}/subjects/${subjectId}`),
    select: ({data}) => data,
    enabled: Boolean(subjectId)
  });

  post = (newSubject) => useMutation({
    mutationKey: ['subjects'],
    mutationFn: async () => axios.post(`${API}/subjects`, newSubject)
  });
}


export default new useQuerySubject;