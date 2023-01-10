const useHttp = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body:requestConfig.body
            }
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        
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

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };
}

export default useHttp