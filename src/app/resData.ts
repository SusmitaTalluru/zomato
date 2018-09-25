interface Location {
    address: string,
    locality: string,
    city: string,
    city_id: number,
    latitude: string,
    longitude: string,
    zipcode: string,
    country_id: number,
    locality_verbose: string
}

interface User_rating {
    aggregate_rating: string,
    rating_text: string,
    rating_color: string,
    votes: string
}

interface R {
    res_id: number;
}

export interface Restaurant {
    R: {
        res_id: number
    },
    apikey: string,
    id: string,
    name: string,
    url: string,
    location: {
        address: string,
        locality: string,
        city: string,
        city_id: number,
        latitude: string,
        longitude: string,
        zipcode: string,
        country_id: number,
        locality_verbose: string
    },
    switch_to_order_menu: number,
    cuisines: string,
    average_cost_for_two: number,
    price_range: number,
    currency: string,
    offers: Array<string>,
    opentable_support: number,
    is_zomato_book_res: number,
    mezzo_provider: string,
    is_book_form_web_view: number,
    book_form_web_view_url: string,
    book_again_url: string,
    thumb: string,
    user_rating: {
        aggregate_rating: string,
        rating_text: string,
        rating_color: string,
        votes: string
    },

    photos_url: string,
    menu_url: string,
    featured_image: string,
    has_online_delivery: number,
    is_delivering_now: number,
    include_bogo_offers: boolean,
    deeplink: string,
    is_table_reservation_supported: number,
    has_table_booking: number,
    events_url: string
}

export interface ResData {

    location: {
        entity_type: string,
        entity_id: number,
        title: string,
        latitude: string,
        longitude: string,
        city_id: number,
        city_name: string,
        country_id: number,
        country_name: string
    },
    popularity: {
        popularity: string,
        nightlife_index: string,
        nearby_res: Array<string>,
        top_cuisines: Array<string>,
        popularity_res: string,
        nightlife_res: string,
        subzone: string,
        subzone_id: number,
        city: string
    },

    link: string,

    nearby_restaurants: Array<Restaurant>
}

export interface ReviewMain {
    rating: number,
    review_text: string,
    id: string,
    rating_color: string,
    review_time_friendly: string,
    rating_text: string,
    timestamp: 1537025922,
    likes: number,
    user: {
        name: string,
        foodie_level: string,
        foodie_level_num: number,
        foodie_color: string,
        profile_url: string,
        profile_image: string,
        profile_deeplink: string
    },
    comments_count: number
}

export interface Review {
    reviews_count: number,
    reviews_start: number,
    reviews_shown: number,
    user_reviews: Array<ReviewMain>,
    Respond_to_reviews_via_Zomato_Dashboard: string
}