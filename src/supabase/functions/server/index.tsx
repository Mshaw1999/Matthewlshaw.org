import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Contact form submission endpoint
app.post('/make-server-d642e30c/contact', async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Generate a unique ID for this contact submission
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store the contact form data in the key-value store
    const contactData = {
      id: contactId,
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      company: body.company || '',
      subject: body.subject,
      message: body.message,
      urgency: body.urgency || 'medium',
      timestamp: body.timestamp || new Date().toISOString(),
      status: 'new'
    };

    await kv.set(contactId, contactData);
    
    // Log the submission
    console.log(`New contact form submission: ${contactId}`, {
      name: body.name,
      email: body.email,
      subject: body.subject,
      urgency: body.urgency,
      timestamp: contactData.timestamp
    });

    // In a production environment, you would also:
    // 1. Send an email notification to Matthew
    // 2. Send a confirmation email to the user
    // 3. Possibly integrate with email services like SendGrid, Mailgun, etc.
    
    return c.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      contactId: contactId 
    });

  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return c.json({ 
      error: 'Failed to process contact form submission',
      details: error.message 
    }, 500);
  }
});

// Endpoint to retrieve contact submissions (for Matthew to review)
app.get('/make-server-d642e30c/contacts', async (c) => {
  try {
    // Get all contact submissions
    const contacts = await kv.getByPrefix('contact_');
    
    // Sort by timestamp (newest first)
    const sortedContacts = contacts.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return c.json({ 
      success: true, 
      contacts: sortedContacts,
      total: sortedContacts.length 
    });

  } catch (error) {
    console.error('Error retrieving contact submissions:', error);
    return c.json({ 
      error: 'Failed to retrieve contact submissions',
      details: error.message 
    }, 500);
  }
});

// Endpoint to mark a contact as read/processed
app.put('/make-server-d642e30c/contact/:id/status', async (c) => {
  try {
    const contactId = c.req.param('id');
    const { status } = await c.req.json();
    
    // Get existing contact data
    const existingContact = await kv.get(contactId);
    if (!existingContact) {
      return c.json({ error: 'Contact not found' }, 404);
    }

    // Update status
    const updatedContact = {
      ...existingContact,
      status: status,
      updatedAt: new Date().toISOString()
    };

    await kv.set(contactId, updatedContact);
    
    return c.json({ 
      success: true, 
      message: 'Contact status updated',
      contact: updatedContact 
    });

  } catch (error) {
    console.error('Error updating contact status:', error);
    return c.json({ 
      error: 'Failed to update contact status',
      details: error.message 
    }, 500);
  }
});

// Health check endpoint
app.get('/make-server-d642e30c/health', (c) => {
  return c.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'matthew-portfolio-backend'
  });
});

// Root endpoint
app.get('/make-server-d642e30c/', (c) => {
  return c.json({ 
    message: 'Matthew Lynn Shaw Portfolio API',
    version: '1.0.0',
    endpoints: [
      'POST /contact - Submit contact form',
      'GET /contacts - Retrieve all contacts',
      'PUT /contact/:id/status - Update contact status',
      'GET /health - Health check'
    ]
  });
});

export default {
  fetch: app.fetch,
};

// Start the server
Deno.serve(app.fetch);