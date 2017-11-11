class QuestionsController < ApiController
  def index
    @questions = Question.all
    render json: @questions
  end

  def create
    @question = Question.new
    @question.title = params[:question][:title]
    @question.body = params[:question][:body]
  end
end
