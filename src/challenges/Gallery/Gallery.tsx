import { useEffect, useState } from 'react'
import { sculptureList } from './data.ts';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const [canPrevious, setCanPrevious] = useState(false)
    const [canNext, setCanNext] = useState(true)

    useEffect(() => {
        if (index - 1 < 0) {
            setCanPrevious(false)
        } else {
            setCanPrevious(true)
        }

        if (index + 1 >= sculptureList.length) {
            setCanNext(false)
        } else {
            setCanNext(true)
        }

    }, [index])

    function handlePreviousClick() {
        canPrevious && setIndex(index - 1)
    }

    function handleNextClick() {
        canNext && setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div style={{ 'display': 'flex', 'gap': '8px' }}>
                <button onClick={handlePreviousClick} disabled={!canPrevious}>
                    Previous
                </button>
                <button onClick={handleNextClick} disabled={!canNext}>
                    Next
                </button>
            </div>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}