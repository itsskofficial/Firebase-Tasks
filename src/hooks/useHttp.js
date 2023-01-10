const useHttp = (requestConfig,applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headersrequestConfig.headers,
                body:JSON.stringify(requestConfig.body)
            }
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        applyData(data)
        }
        catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest:sendRequest
    }
}

export default useHttp