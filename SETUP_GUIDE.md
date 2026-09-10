# CogniFactlab — Email & CRM Setup Guide

## 📧 Gmail Integration (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free tier: 200 emails/month)
2. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** → **Add New Service**
2. Select **Gmail**
3. Connect your Gmail account (the one where you want to receive submissions)
4. Name it: `service_cognifactlab`
5. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set up the template:

**Subject:**
```
🚀 New Project Intake: {{from_name}} — {{project_field}}
```

**Content (HTML):**
```html
<h2>New Project Intake Submission</h2>

<table style="border-collapse: collapse; width: 100%;">
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">{{from_name}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">WhatsApp</td><td style="padding: 8px; border: 1px solid #ddd;">{{whatsapp_number}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">College</td><td style="padding: 8px; border: 1px solid #ddd;">{{college}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Department</td><td style="padding: 8px; border: 1px solid #ddd;">{{department}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Degree</td><td style="padding: 8px; border: 1px solid #ddd;">{{degree}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Year</td><td style="padding: 8px; border: 1px solid #ddd;">{{year}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Requirement</td><td style="padding: 8px; border: 1px solid #ddd;">{{requirement}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Project Field</td><td style="padding: 8px; border: 1px solid #ddd;">{{project_field}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Technologies</td><td style="padding: 8px; border: 1px solid #ddd;">{{technologies}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timeline</td><td style="padding: 8px; border: 1px solid #ddd;">{{timeline}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget</td><td style="padding: 8px; border: 1px solid #ddd;">{{budget}}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">WhatsApp Opt-in</td><td style="padding: 8px; border: 1px solid #ddd;">{{whatsapp_opt_in}}</td></tr>
</table>

<h3>Project Idea:</h3>
<p>{{project_idea}}</p>

<hr>
<p style="color: #666; font-size: 12px;">
  Sent from CogniFactlab Website | 
  <a href="https://wa.me/{{whatsapp_number}}">Open WhatsApp Chat</a>
</p>
```

3. Save the template and copy the **Template ID** (e.g., `template_project_intake`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update Website Code
In `src/App.tsx`, find the `handleSubmit` function and replace:
- `'service_cognifactlab'` → Your actual Service ID
- `'template_project_intake'` → Your actual Template ID
- `'YOUR_PUBLIC_KEY'` → Your actual Public Key

```typescript
await emailjs.send(
  'service_XXXXXXXXX',        // ← Your Service ID
  'template_XXXXXXXXX',       // ← Your Template ID
  { ... },
  'XXXXXXXXXXXXXXXXX'         // ← Your Public Key
);
```

### Step 6: Test
1. Submit the form on your website
2. Check your Gmail — you should receive a formatted email
3. Verify all fields are populated correctly

---

## 📊 CRM Integration (Google Apps Script)

Your existing Apps Script setup will continue to work. The form now sends to BOTH:
1. **EmailJS** → Your Gmail (instant notification)
2. **Google Apps Script** → Your CRM spreadsheet (structured data)

---

## 💬 WhatsApp Floating Button

Update the WhatsApp number in `src/App.tsx`:
```typescript
href="https://wa.me/919999999999?text=..."
```
Replace `919999999999` with your actual WhatsApp number (with country code, no + sign).

---

## 🎯 What's New in This Update

### 1. **Gmail Integration**
- Form submissions now send directly to your Gmail
- Beautiful HTML-formatted emails with all student details
- Click-to-WhatsApp link in every email

### 2. **Pricing Section**
- 3-tier pricing: Starter (₹3K), Professional (₹8K), Enterprise (₹20K+)
- Clear feature comparison
- "Most Popular" badge on Professional plan

### 3. **Why Choose Us Comparison**
- Side-by-side table: CogniFactlab vs Online Project Sellers
- 8 key differentiators highlighted
- Reinforces mentoring positioning

### 4. **Urgency Banner**
- "Tight Deadline? We've Got You" section
- Express booking CTA for 7-day submissions
- Creates urgency during submission season

### 5. **Floating WhatsApp Button**
- Always-visible green button (bottom-right)
- One-click chat with pre-filled message
- Mobile-optimized

### 6. **Updated Navbar**
- Added "Pricing" link
- Streamlined navigation

---

## 📋 Push to GitHub

```bash
git add .
git commit -m "Add Gmail integration, pricing, comparison table, urgency banner, WhatsApp button"
git push
```

---

## 🔧 Future Enhancements (Recommended)

### Phase 2 (Next Sprint)
- [ ] **Blog/Resources section** — SEO + authority building
- [ ] **Student testimonials with photos** — Social proof
- [ ] **Free Viva Question Bank PDF** — Lead magnet
- [ ] **Referral program** — Word-of-mouth growth
- [ ] **College partnership page** — B2B angle

### Phase 3 (Growth)
- [ ] **Video testimonials** — YouTube embeds
- [ ] **Live chat widget** — Tawk.to or Crisp (free)
- [ ] **Analytics dashboard** — Track conversions
- [ ] **Automated follow-up emails** — EmailJS + cron
- [ ] **Student portal** — Track progress post-enrollment

---

## ✅ Testing Checklist

- [ ] Submit form → Check Gmail for notification
- [ ] Verify all fields in email are populated
- [ ] Click WhatsApp link in email → Opens chat
- [ ] Check CRM spreadsheet for new row
- [ ] Test floating WhatsApp button → Opens chat
- [ ] Test pricing CTAs → Opens intake modal
- [ ] Test urgency banner → Opens intake modal
- [ ] Verify mobile responsiveness
- [ ] Check all navigation links work

---

## 📞 Support

If EmailJS setup is confusing, watch their official tutorial:
https://www.emailjs.com/docs/

Or reach out to EmailJS support — they're responsive.

---

**Last Updated:** 2026
**Version:** 2.0 — Full CRM + Email Integration
