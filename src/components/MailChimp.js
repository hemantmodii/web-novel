const MailchimpForm = () => {
   const mailchimpFormHtml = `
     <div id="mc_embed_shell">
       <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
       <style type="text/css">
         #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
       </style>
       <div id="mc_embed_signup" style="background:#c19a6b">
         <form action="https://hemantmodi.us14.list-manage.com/subscribe/post?u=0b710b59e302b9d7b69616d53&amp;id=35ac67424d&amp;f_id=009e90e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" >
           <div id="mc_embed_signup_scroll" ><h2>Subscribe</h2>
             <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
             <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
             <div id="mce-responses" class="clear foot">
               <div class="response" id="mce-error-response" style="display: none;"></div>
               <div class="response" id="mce-success-response" style="display: none;"></div>
             </div>
             <div aria-hidden="true" style="position: absolute; left: -5000px;">
               /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
               <input type="text" name="b_0b710b59e302b9d7b69616d53_35ac67424d" tabindex="-1" value="">
             </div>
             <div class="optionalParent">
               <div class="clear foot">
                 <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                 
               </div>
             </div>
           </div>
         </form>
       </div>
       <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
       <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
     </div>
   `;
 
   return (
     <div dangerouslySetInnerHTML={{ __html: mailchimpFormHtml }} />
   );
 };
 
 export default MailchimpForm;