const TagembedSocialSchema = {
    gSD(sId, fId, sDiv) {
        const sObj = JSON.parse(sDiv.innerHTML);
        fetch(`https://api.taggbox.com/api/v1/walls/google-schema/${sId}/${fId}`, {
            headers: {
                'Content-Type': 'application/json',
                'productdomain': `taggbox.com`
            }
        })
            .then(r => r.ok ? r.json() : Promise.reject(`HTTP error! Status: ${r.status}`))
            .then(({ data: d }) => {
                if (d?.rating) {
                    sObj.aggregateRating.ratingValue = d.rating.rating;
                    sObj.aggregateRating.reviewCount = d.rating.count;
                    sDiv.innerHTML = JSON.stringify(sObj);
                }
            })
            .catch(e => console.error('Fetch error:', e));
    }
};

document.querySelectorAll(".tagembed-schema-code").forEach(el =>
    TagembedSocialSchema.gSD(el.getAttribute("data-ref"), el.getAttribute("data-feed-ref"), el)
);
