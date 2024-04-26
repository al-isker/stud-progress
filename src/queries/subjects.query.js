import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";

import {API} from "../config/API.js";

class useQuerySubject {
  getAll = () => useQuery({
    queryKey: ['subjects'],
    queryFn: async () => axios.get(`${API}/subjects`),
    select: ({data}) => data
  });

  getById = (id) => useQuery({
    queryKey: ['subjects', id],
    queryFn: async () => axios.get(`${API}/subjects/${id}`),
    select: ({data}) => data
  });

  create = () => useMutation({
    mutationKey: ['subjects'],
    mutationFn: async (newSubject) => axios.post(`${API}/subjects`, newSubject)
  });

  delete = () => useMutation({
    mutationKey: ['subjects'],
    mutationFn: async (id) => axios.delete(`${API}/subjects/${id}`)
  });

  edit = () => useMutation({
    mutationKey: ['subjects'],
    mutationFn: async ({id, newSubject}) => axios.put(`${API}/subjects/${id}`, newSubject)
  });
}


export default new useQuerySubject;