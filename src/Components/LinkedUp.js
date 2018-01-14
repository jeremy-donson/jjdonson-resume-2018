import React, { Component } from 'react';

import { Button } from 'reactstrap';


export default () => (
<div align="center">
<script type="text/javascript">document.getElementById('date').value = (new Date()).format("m/dd/yy");</script>

<h5>Confidentiality and Non-Disclosure Agreement</h5>
<p>Safely share proprietary information.</p>
<p><small>Each field below is mandatory.</small></p>
<form>
<fieldset >
<p>Personal email address.<br/>
<input type="text" name="nda_email" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Personal phone number.<br/
><input type="text" name="nda_phone" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Full legal name.<br/>
<input type="text" name="nda_legal_name" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Full legal mailing address.<br/>
<input type="text" name="nda_mail_address1" size="30" style={{ border: '1px solid #ff0000' }}/><br/>
<input type="text" name="nda_mail_address2" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Legal business name.<br/>
<input type="text" name="nda_biz_name" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Type of business.<br/>
<input type="text" name="nda_email_biz" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Business Principle Full Name.<br/>
<input type="text" name="nda_email_principle" size="30" style={{ border: '1px solid #ff0000' }}/></p>


<p>Business email address.<br/>
<input type="text" name="nda_biz_email_address1" size="30" style={{ border: '1px solid #ff0000' }}/><br/>
<input type="text" name="nda_biz_email_address2" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Business phone number.<br/>
<input type="text" name="nda_phone_biz" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Agreement declared in which US state?<br/>
<input type="text" name="nda_state" value="New York" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Date agreement made active.<br/>
<input type="text" id="start_date" name="nda_start_date" size="30" style={{ border: '1px solid #ff0000' }}/></p>

<p>Duration of agreement.<br/>
<input type="text" name="nda_legal_name" size="30" value="Permanent" style={{ border: '1px solid #ff0000' }}/></p>

<p>Can you have this completed form notarized within 48 hours?<br/>
<label for="nda_notarized_yes">Yes </label> <input type="radio" id="nda_notarized_yes" name="nda_notarized" value="yes"/> | <input type="radio" id="nda_notarized_no" name="nda_notarized" value="no"/> <label for="nda_notarized_no"> No</label>
</p>

<p>Are you a US Citizen?<br/>
<label for="nda_citizen_yes">Yes </label> <input type="radio" id="nda_citizen_yes" name="nda_citizen" value="yes"/> | <input type="radio" id="notarized_no" name="nda_citizen" value="no"/> <label for="nda_citizen_no"> No</label>
</p>
<hr/>
<div align="center" style={{ width: '88%', height: '50%'}}>
<small>The Parties ("Party 1, ie PROVIDER, and Party 2, ie RECIPIENT") are exploring the possibility of engaging
in one or more mutually beneficial business relationships (collectively, the “Business Relationship”).
The Parties recognize that in the course of their discussions to further the Business Relationship,
it will be necessary for each Party to disclose to the other certain Confidential Information (as defined below).
Each Party desires to set forth the terms that apply to such Confidential Information.
<br/><br/>
NOW, THEREFORE, for and in consideration of the foregoing, of the promises and covenants set forth herein,
and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged,
the Parties do hereby agree as follows:
<br/><br/>
1. The Parties shall (i) use reasonable efforts to maintain the confidentiality of the information and materials,
whether oral, written or in any form whatsoever, of the other that may be reasonably understood, from legends,
the nature of such information itself and/or the circumstances of such information’s disclosure,
to be confidential and/or proprietary thereto or to third parties to which either of them owes a
duty of nondisclosure (collectively, “Confidential Information”); (ii) take reasonable action in connection
therewith, including without limitation at least the action that each takes to protect the confidentiality
of its comparable proprietary assets; (iii) to the extent within their respective possession and/or control,
upon termination of this Agreement for any reason, immediately return to the provider thereof all
Confidential Information not licensed or authorized to be used or enjoyed after termination or expiration hereof,
and (iv) with respect to any person to which disclosure is contemplated, require such person to execute an
agreement providing for the treatment of Confidential Information set forth in clauses (i) through (iii).
The foregoing shall not require separate written agreements with employees and agents already subject to
written agreements substantially conforming to the requirements of this Section nor with legal counsel,
certified public accountants, or other professional advisers under a professional obligation to maintain
the confidences of clients.
<br/><br/>
2. Notwithstanding the foregoing, the obligation of a person to protect the confidentiality of any information
or materials shall terminate as to any information or materials which: (i) are, or become, public knowledge
through no act or failure to act of such person; (ii) are publicly disclosed by the proprietor thereof;
(iii) are lawfully obtained without obligations of confidentiality by such person from a third party after
reasonable inquiry regarding the authority of such third party to possess and divulge the same; (iv) are
independently developed by such person from sources or through persons that such person can demonstrate had
no access to Confidential Information; or (v) are lawfully known by such person at the time of disclosure
other than by reason of discussions with or disclosures by the Parties.
<br/><br/>
3. All Confidential Information delivered pursuant to this Agreement shall be and remain the property of
the disclosing Party, and any documents containing or reflecting the Confidential Information, and all copies thereof,
shall be promptly returned to the disclosing Party upon written request, or destroyed at the disclosing Party’s option.
Nothing herein shall be construed as granting or conferring any rights by license or otherwise, express or implied,
regarding any idea made, conceived or acquired prior to or after the Effective Date, nor as granting any right with
respect to the use or marketing of any product or service. The Parties shall use the Confidential Information only
for the Business Relationship.</small>
</div>
<hr/>
Said disclosures shall include:
<p>Written proposals to recruiters and recruiting firm management.</p>
<p>Access to proprietary software.</p>
<p>Access to software specifications.</p>
<p>Access to workflow diagrams.</p>
<hr/>
<p>For any questions prior to agreeing to each and every one of these terms,<br/>
<i class="fa fa-envelope-square fa-2x"></i> <a href="mailto:jjdonson@gmail.com&subject=linkedup%20nda%20questions">Email The Provider</a> <i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i> <br/>
and candidly describe
your concerns as secure recipient.</p>
<hr/>
<p>Do you agree to these terms?<br/>
<label for="nda_agree_yes">Yes </label> <input type="radio" id="nda_agree_yes" name="notarized" value="yes"/> | <input type="radio" id="notarized_no" name="nda_citizen_no" value="no"/> <label for="nda_citizen_no"> No</label>
</p>

<hr/>
<Button name="nda_submit" color="secondary" ><i class="fa fa-lock"></i> Submit NDA Form <i class="fa fa-lock"></i></Button>

</fieldset>
</form>
</div>
);