 public HttpClient GetHttpClient(string uri = null)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();

            if (uri == null)
                client.BaseAddress = new Uri(WebConfigurationManager.AppSettings["APIBaseAdress"]);
            else
                client.BaseAddress = new Uri(WebConfigurationManager.AppSettings["APIBaseAdress"] +"/"+ uri);

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("default", "");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client;
        }

		
		
public Response CallUsingPOSTRequest(string abc)
        {
            Response obj = new Response();
            try
            {
                using (var client = GetHttpClient())
                {
                    string json = JsonConvert.SerializeObject(abc);

                    var response = client.PostAsync("CallUsingPOSTRequest", new StringContent(json, Encoding.UTF8, "application/json")).Result;

                    string content = response.Content.ReadAsStringAsync().Result;
                     
                    obj = JsonConvert.DeserializeObject<Response>(content);
                }
            }
            catch (Exception ex)
            {
               
            }
            return obj;
        }

		
public Response CallUsingGETRequest(DateTime LastDateTime)
        {            
            Response objresponse = new Response();
            try
            {
                using (var client = GetHttpClient("getMasterData"))
                {
                    string json = JsonConvert.SerializeObject(LastDateTime);
                    var builder = new UriBuilder(client.BaseAddress);
                    builder.Query = "LastDateTime=" + LastDateTime.ToLongDateString();
                    string url = builder.ToString();

                    var response = client.GetAsync(url).Result;

                    string content = response.Content.ReadAsStringAsync().Result;

                    objresponse = JsonConvert.DeserializeObject<Response>(content);
                }
            }
            catch (Exception ex)
            {
                
              
            }
            return objresponse;
        }
		
		
		
		
