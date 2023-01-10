const useHttp = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
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

        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
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