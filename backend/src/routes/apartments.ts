import { Router, Request, Response } from 'express';
import { query } from '../database';
import { Apartment } from '../models/apartment';

const router = Router();

/**
 * GET /api/apartments
 * Retrieve all apartments with optional search and filter
 * 
 * Query Parameters:
 * - search: Search by unit name, unit number, or project (case-insensitive)
 * - project: Filter by specific project name (case-insensitive)
 * 
 * Returns: Array of apartment objects
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, project } = req.query;
    
    // Start with base query
    let queryText = 'SELECT * FROM apartments WHERE 1=1';
    const params: any[] = [];
    let paramCount = 1;

    // Add search filter if provided
    if (search) {
      queryText += ` AND (unit_name ILIKE $${paramCount} OR unit_number ILIKE $${paramCount} OR project ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    // Add project filter if provided
    if (project) {
      queryText += ` AND project ILIKE $${paramCount}`;
      params.push(`%${project}%`);
      paramCount++;
    }

    // Order by most recent first
    queryText += ' ORDER BY created_at DESC';

    const result = await query(queryText, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/apartments/:id
 * Retrieve a single apartment by ID
 * 
 * Parameters:
 * - id: Apartment ID (integer)
 * 
 * Returns: Apartment object or 404 if not found
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM apartments WHERE id = $1', [id]);
    
    // Check if apartment exists
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Apartment not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching apartment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/apartments
 * Add a new apartment to the database
 * 
 * Request Body:
 * - unit_name: Name of the unit (required)
 * - unit_number: Unit number (required)
 * - project: Project name (required)
 * - bedrooms: Number of bedrooms (required)
 * - bathrooms: Number of bathrooms (required)
 * - area: Area in square meters (required)
 * - price: Price in currency (required)
 * - description: Apartment description (optional)
 * - image_url: URL to apartment image (optional)
 * 
 * Returns: Created apartment object with ID
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { 
      unit_name, 
      unit_number, 
      project, 
      bedrooms, 
      bathrooms, 
      area, 
      price, 
      description, 
      image_url 
    }: Apartment = req.body;

    // Validate required fields
    if (!unit_name || !unit_number || !project || !bedrooms || !bathrooms || !area || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert new apartment into database
    const result = await query(
      `INSERT INTO apartments (unit_name, unit_number, project, bedrooms, bathrooms, area, price, description, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [unit_name, unit_number, project, bedrooms, bathrooms, area, price, description || null, image_url || null]
    );

    // Return created apartment with 201 status
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding apartment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;