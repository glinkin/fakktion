# Genres Controller: JSON response through Active Model Serializers
class Api::V1::GenresController < ApiController
  respond_to :json

  # Render all Genres using GenreSerializer.
  def index
    render json: Genre.all
  end

  # Render the specified Genre using GenreSerializer.
  def show
    render json: genre
  end

  # Render the created Genres using GenreSerializer and the AMS Deserialization.
  def create
    json_create(genre_params)
  end

  # Render the updated Genre using GenreSerializer and the AMS Deserialization.
  def update
    json_update(genre,genre_params)
  end

  # Destroy Genre from the AMS Deserialization params.
  def destroy
    json_destroy(genre)
  end

  private

  # Genre object from the Deserialization params if there is an id.
  def genre
    Genre.find(params[:id])
  end

  # AMS Genre Deserialization.
  def genre_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(params.to_unsafe_h)
  end
end
