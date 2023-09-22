import {type ActiveSessionResource} from "@clerk/types";
import axios, {type AxiosRequestConfig, type AxiosResponse} from "axios";

type http_methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const fetch_$_JSON_with_token = async <Type>(
   _url: string,
   _method: http_methods,
   _session: ActiveSessionResource | null | undefined,
   _data?: object
): Promise<Type[] | null> => {
   const token = await _session?.getToken();
   if (!token) return null;

   const request = {
      method: _method,
      url: _url,
      headers: {Authorization: token},
   } as AxiosRequestConfig;

   if (_data) request.data = _data

   return axios(request)
      .then((res: AxiosResponse<string>) => res.data.length
         ? console.log(res.data
            .split('--------------')
            .map((model) => JSON.parse(model.replace('--------------', '')) as Type))
         : []
      ).catch((error: Error) => {
         console.error(error)
         return null;
      })
};

export const fetch_with_token = async <Type>(
   _url: string,
   _method: http_methods,
   _session: ActiveSessionResource | null | undefined,
   _data?: object
): Promise<Type[] | null> => {
   const token = await _session?.getToken();
   if (!token) return null;

   const request = {
      method: _method,
      url: _url,
      headers: {Authorization: token},
   } as AxiosRequestConfig;

   if (_data) request.data = _data

   return axios(request)
      .then((res: AxiosResponse<Type[]>) => res.data)
      .catch((error: Error) => {
         console.error(error)
         return null;
      })
};