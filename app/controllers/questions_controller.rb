class QuestionsController < ApiController
  def index
    @questions = Question.all
    render json: @questions
  end

  def create
    @question = Question.new
    @question.title = params[:title]
    @question.description = params[:description]

    @question.save
  end
end
