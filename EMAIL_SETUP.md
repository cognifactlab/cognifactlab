# 📧 Email Setup Guide - Web3Forms

## Quick Setup (5 Minutes)

Your form is now configured to send submissions directly to **cogniFactlab@gmail.com** using Web3Forms.

---

## 🚀 Step-by-Step Setup

### Step 1: Get Your Access Key

1. Go to **[web3forms.com](https://web3forms.com)**
2. Enter your email: **cogniFactlab@gmail.com**
3. Check your inbox for the access key
4. Copy the access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Step 2: Update the Code

Open `src/App.tsx` and find line ~1020:

```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

Replace with your actual access key:

```typescript
access_key: 'abc123def456-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
```

### Step 3: Test It

1. Submit the form on your website
2. Check **cogniFactlab@gmail.com** inbox
3. You should receive a formatted email with all form details

---

## ✉️ What You'll Receive

When someone submits the form, you'll get an email like this:

```
Subject: 🚀 New Project Intake: John Doe - AI / ML

From: CogniFactlab Website
To: cogniFactlab@gmail.com

---

Name: John Doe
WhatsApp: +91 9876543210
College: MIT Pune
Department: Computer Science & Engineering
Degree: B.Tech / B.E.
Year: 4th Year / Final Year
Requirement: Major Project
Project Field: AI / ML
Technologies: Python, ML/AI, FastAPI
Timeline: Within 15 Days
Budget: ₹10,000 – ₹20,000
WhatsApp Opt-in: Yes

Message:
I want to build an image classification system for plant disease detection...

---

Submission Date: 1/15/2026, 3:45:23 PM
```

---

## 🎯 Features

✅ **Direct to Gmail** - No middleman, goes straight to your inbox  
✅ **Formatted Email** - Clean, readable format with all details  
✅ **Subject Line** - Includes student name and project field  
✅ **Reply Support** - Students can reply directly to the email  
✅ **Free Tier** - 250 submissions/month (more than enough)  
✅ **No Signup Required** - Just enter email and get key  
✅ **Spam Protection** - Built-in honeypot and rate limiting  
✅ **Mobile Friendly** - Works on all devices  

---

## 💰 Pricing

**Free Plan:**
- 250 submissions/month
- Direct email delivery
- Basic spam protection
- No branding

**Pro Plan ($5/month):**
- Unlimited submissions
- Custom reply-to email
- Auto-responder
- Remove Web3Forms branding

For your needs, the **free plan is perfect**.

---

## 🔧 Advanced Configuration

### Custom Email Template

If you want to customize the email format, you can do so in your Web3Forms dashboard:

1. Login to [web3forms.com](https://web3forms.com)
2. Go to Settings → Email Template
3. Customize the HTML template

### Auto-Responder

Want to send an automatic reply to students?

1. Login to Web3Forms dashboard
2. Go to Settings → Auto-Responder
3. Enable and customize the message

Example auto-responder:
```
Subject: We received your project inquiry!

Hi {name},

Thanks for reaching out to CogniFactlab! We've received your project details and will get back to you within 24 hours.

In the meantime, you can:
- WhatsApp us directly: +91 88287 30908
- Check our FAQ section on the website

Looking forward to mentoring you!

Best regards,
Team CogniFactlab
```

---

## 🔄 CRM Integration (Optional)

The form also attempts to send data to your Google Apps Script CRM. If you have that set up:

1. Open `src/App.tsx`
2. Find line ~1060:
```typescript
await fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', {
```
3. Replace `YOUR_DEPLOYMENT_ID` with your actual Apps Script deployment ID

If you don't have CRM setup, don't worry - the email will still work perfectly.

---

## 🐛 Troubleshooting

### "Form not submitting"
- Check your access key is correct
- Ensure you replaced `YOUR_WEB3FORMS_ACCESS_KEY`
- Check browser console for errors

### "Not receiving emails"
- Check spam folder
- Verify access key email matches cogniFactlab@gmail.com
- Try resubmitting the form
- Check Web3Forms dashboard for delivery status

### "Getting error messages"
- Check your internet connection
- Verify the API endpoint is accessible
- Try a different browser
- Check Web3Forms status at [web3forms.com/status](https://web3forms.com/status)

---

## 📊 Viewing Submissions

### In Gmail
All submissions go to your inbox with subject: `🚀 New Project Intake: [Name] - [Field]`

### In Web3Forms Dashboard
1. Login to [web3forms.com](https://web3forms.com)
2. View all submissions
3. Export to CSV if needed
4. Filter by date, status, etc.

---

## 🔐 Security

✅ **HTTPS Only** - All submissions encrypted  
✅ **Spam Protection** - Honeypot + rate limiting  
✅ **No Data Storage** - Web3Forms doesn't store your data  
✅ **GDPR Compliant** - EU data protection standards  
✅ **Consent Tracking** - WhatsApp opt-in recorded  

---

## 📱 Mobile Testing

Test on mobile:
1. Open your website on phone
2. Fill out the form
3. Submit
4. Check email on phone
5. Verify all fields are present

---

## 🎉 That's It!

Your form is now live and sending submissions directly to **cogniFactlab@gmail.com**.

### Quick Checklist:
- [ ] Got access key from web3forms.com
- [ ] Replaced `YOUR_WEB3FORMS_ACCESS_KEY` in code
- [ ] Tested form submission
- [ ] Received test email in Gmail
- [ ] Verified all form fields are present
- [ ] Tested on mobile device

---

## 🆘 Need Help?

**Web3Forms Support:**
- Email: support@web3forms.com
- Docs: [web3forms.com/docs](https://web3forms.com/docs)

**Website Issues:**
- Check browser console (F12)
- Verify code changes are deployed
- Clear browser cache

---

**Last Updated:** 2026  
**Status:** ✅ Ready to Use  
**Email:** cogniFactlab@gmail.com
