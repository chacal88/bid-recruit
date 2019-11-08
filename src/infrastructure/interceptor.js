import axiosInstance from "axios";

export default {

    intercept: (req) => {

        axiosInstance.interceptors.request.use((configuration) => {

                const requestToken = req.header('Authorization');
                if (requestToken != null) {
                    configuration.headers['Authorization'] = requestToken;
                    process.env['Authorization'] = requestToken;
                }

                configuration.headers['Accept']       = `application/json`;
                configuration.headers['Content-Type'] = `application/json`;


                return configuration
            }
        );
    }


}
