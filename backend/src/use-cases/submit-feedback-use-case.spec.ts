import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies=espiões

const createFeadbackSpy=jest.fn();
const sendMailSpy= jest.fn();



describe('Submit feedback',()=>{

    const submitFeedback= new SubmitFeedbackUseCase(
        {create:createFeadbackSpy},
        {sendMail:sendMailSpy}
        )


    it('teste classe envio de feedbacks',async()=>{
        //informe abaixo dado a serem enviados ao servidor.  
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screenshot:'data:image/png;base64,812ljfljdlkdjfld',
        })).resolves.not.toThrow();

        expect(createFeadbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    // for case down await errs 
    it('should not be able to submit feedback without type',async()=>{
        //informe abaixo dado a serem enviados ao servidor.  
        await expect(submitFeedback.execute({
            type:'',
            comment:'example comment',
            screenshot:'data:image/png;base64,812ljfljdlkdjfld',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without comment',async()=>{
        //informe abaixo dado a serem enviados ao servidor.  
        await expect(submitFeedback.execute({
            type:'Bug',
            comment:'',
            screenshot:'data:image/png;base64,812ljfljdlkdjfld',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without screenshot',async()=>{
     
        await expect(submitFeedback.execute({
            type:'Bug',
            comment:'dffd',
            screenshot:'test.jpg',
        })).rejects.toThrow();
    })
})

