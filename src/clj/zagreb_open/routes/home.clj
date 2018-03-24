(ns zagreb-open.routes.home
  (:require [zagreb-open.layout :as layout]
            [zagreb-open.db.core :as db]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render
    "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))

(defn about-page []
  (layout/render "about.html"))

(defn by-bodyweight [participant]
  (.substring (:bodyweight participant) 1))

(defn by-bodyweight-edge-case [participant]
  (condp = (first (:bodyweight participant))
    \- 1
    \+ 2
    :else (do (println participant) 3)))

(defn group-category [items]
  (map
   (fn [[k v]] {:category k :items (sort-by (juxt :kettlebell by-bodyweight by-bodyweight-edge-case) v)})
   (group-by :category items)))


(defn group-sex [items]
  (map
   (fn [[k v]] {:sex k :items (group-category v)})
   (group-by :sex items)))

(defn group-competitions []
  (map
   (fn [[k v]] {:competition k :items (group-sex v)})
   (group-by :competition (db/get-participants)))
)

(defn participants []
  (layout/render "participants.html" {:competitions (group-competitions)}))

(defn register []
  (layout/render "register.html"))

(defn insert-participant! [{:keys [params]}]
  (do
    (db/insert-participant! params)
    (response/found "/participants")))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/participants" [] (participants))
  (GET "/register" [] (register))
  (GET "/about" [] (about-page))
  (POST "/register-submit" request (insert-participant! request)))
